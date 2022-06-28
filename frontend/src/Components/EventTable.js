import React, {Component} from 'react';
import MaterialTable from '@material-table/core';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";

import { 
  MuiPickersUtilsProvider, KeyboardDatePicker
}  from "@material-ui/pickers";

import { getCurrentEvents, getDeletedEvents } from '../services/EventService';


class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: this.locale });
  }

  getDatePickerHeaderText(date) {
    return format(date, "dd MMMM", { locale: this.locale });
  }
}


const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonCopy = styled.button`
  background: #fff;

  width: 2.5rem;
  height: 1.8rem;

  border-radius: 0.3rem 0.1rem 0.1rem 0.3rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const ButtonLink = styled.button`
  background: var(--black);
  width: 2.5rem;
  height: 1.8rem;

  border-radius: 0.1rem 0.3rem 0.3rem 0.1rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;


const copyLink = (link) => {
  return (
    () => {
      navigator.clipboard.writeText(link);
      toast.success('Ссылка скопирована!', {
        style: {
          padding: '16px',
          color: 'var(--black)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 4px',
          borderRadius: '5rem'
        },
        iconTheme: {
          primary: 'var(--purple)',
          secondary: '#FFFAEE',
        },
      });
    }
  )
};

const LinkGroup = (props) => {
  return (
    <ButtonGroup>
      <ButtonCopy onClick={ copyLink(props.link) }>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
          <rect width="13.846" height="13.846" x="1" y="1" stroke="#000" strokeWidth="1.5" rx="2"/>
          <path stroke="#000" strokeLinecap="round" strokeWidth="1.5" d="M17.538 7.154H19a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H9.154a2 2 0 0 1-2-2v-1.462m5.192-10.384H9.154a2 2 0 0 0-2 2v3.192"/>
        </svg>
      </ButtonCopy>
      <Toaster />
      
      <a href={ props.link } target="_blank" rel="noreferrer">
        <ButtonLink>
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </ButtonLink>
      </a>
    </ButtonGroup>
  )
}

class EventTable extends Component {

  state = {
    event: {},
    events: [],
    numberOfEvents: 0
  }

  getCurrentEvents = () => {
    getCurrentEvents()
      .then(results => {
        this.setState({events: results[0], numberOfEvents: results[0].length})
        console.log(results[0])
      });
  }

  getDeletedEvents = () => {
    getDeletedEvents()
      .then(results => {
        this.setState({events: results[0], numberOfEvents: results[0].length})
        console.log(results[0])
      });
  }

  componentDidMount() {
    if (this.props.id === 'bin') {
      this.getDeletedEvents();
    }
    else this.getCurrentEvents();
  }

  filterEvents = () => {
    return this.state.events.filter(
      (element) => {
        if (this.props.id !== 'bin') {
          if (this.props.id === 'published') return element.is_published === 1;
          if (this.props.id === 'drafts') return element.is_draft === 1;
          if (this.props.id === 'archive') return element.archived_at !== null;
        }
        return true;
      }
    )
  }

  render() {
    return (
      <MaterialTable
        title={this.props.name}
        columns={[
          { 
            title: 'id',
            field: 'id',
            hidden: true 
          },
          { 
            title: 'Название',
            field: 'name',
            render: row => <div onClick={() => window.alert("TEST")}>{ row.name }</div>
          },
          { 
            title: 'date_from',
            field: 'date_from',
            hidden: true 
          },
          { 
            title: 'Дата',
            field: 'date_to',
            type: 'date',
            render: rowData => new Date(rowData.date_to).toLocaleDateString(),
            filterComponent: ({ columnDef, onFilterChanged }) => (
              <MuiPickersUtilsProvider utils={ RuLocalizedUtils } locale={ ruLocale }>
                <KeyboardDatePicker
                  className='filter-date-picker'
                  clearLabel="Очистить"
                  format={"dd.MM.yyyy"}
                  cancelLabel={"Отмена"}
                  onChange={(date) => {
                    onFilterChanged(columnDef.tableData.id, date);
                  }}
                  value={ columnDef.tableData.filterValue || null }
                  clearable
                />
              </MuiPickersUtilsProvider>
            )
          },
          { 
            title: 'Категория', 
            field: 'category', 
            lookup: { 
              'Конкурсы проектов': 'Конкурсы проектов',
              'Акселераторы': 'Акселераторы',
              'Хакатоны': 'Хакатоны',
              'Конференции': 'Конференции',
              'Другое': 'Другое',
              '': 'Без категории'
            },
          },
          { 
            title: 'Место', 
            field: 'place', 
          },
          { 
            title: '', 
            field: 'link', 
            filterComponent: () => (null), render: rowData => <LinkGroup link={ rowData.link }/>
          },
          { 
            title: 'post_link',
            field: 'post_link',
            hidden: true 
          },
          { 
            title: 'dc_nav_link',
            field: 'dc_nav_link',
            hidden: true 
          },
          { 
            title: 'dc_bttn_link',
            field: 'dc_bttn_link',
            hidden: true 
          },
          { 
            title: 'descr',
            field: 'descr',
            hidden: true 
          },
          { 
            title: 'excerpt',
            field: 'excerpt',
            hidden: true 
          },
          { 
            title: 'is_published',
            field: 'is_published',
            type: 'numeric',
            hidden: true 
          },
          { 
            title: 'is_draft',
            field: 'is_draft',
            type: 'numeric',
            hidden: true 
          },
          { 
            title: 'archived_at',
            field: 'archived_at',
            hidden: true 
          },
          { 
            title: 'src_name',
            field: 'src_name',
            hidden: true 
          },
          { 
            title: 'src_link',
            field: 'src_link',
            hidden: true 
          },
          { 
            title: 'author_id',
            field: 'author_id',
            type: 'numeric',
            hidden: true 
          },
        ]}

        data={ this.filterEvents() }        
        options={{
          sorting: true,
          selection: true,
          filtering: true,
          thirdSortClick: false,
          maxBodyHeight: "60vh",
          emptyRowsWhenPaging: false,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
        }}
      />
    )
  }
}

export default EventTable;
