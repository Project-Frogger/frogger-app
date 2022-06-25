import React  from 'react';
import MaterialTable from '@material-table/core';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";

import { 
  MuiPickersUtilsProvider, DatePicker
}  from "@material-ui/pickers";


/***************************TEST DATA****************************/

const data = [
  {
    "id": 1,
    "name": "Всероссийский конкурс «Идеи, преображающие города",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 2,
    "name": "Росмолодёжь. Гранты",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 3,
    "name": "Health Data Hack",
    "date": "03/03/2022",
    "category": "Хакатон",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 4,
    "name": "Конкурс STArt Open call",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 5,
    "name": "Дельфийские игры",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 6,
    "name": "Всероссийский конкурс «Идеи, преображающие города",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 7,
    "name": "Росмолодёжь. Гранты",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 8,
    "name": "Health Data Hack",
    "date": "03/03/2022",
    "category": "Хакатон",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 9,
    "name": "Конкурс STArt Open call",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 10,
    "name": "Дельфийские игры",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 11,
    "name": "Всероссийский конкурс «Идеи, преображающие города",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 12,
    "name": "Росмолодёжь. Гранты",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 13,
    "name": "Health Data Hack",
    "date": "03/03/2022",
    "category": "Хакатон",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 14,
    "name": "Конкурс STArt Open call",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 15,
    "name": "Дельфийские игры",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 16,
    "name": "Всероссийский конкурс «Идеи, преображающие города",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 17,
    "name": "Росмолодёжь. Гранты",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 18,
    "name": "Health Data Hack",
    "date": "03/03/2022",
    "category": "Хакатон",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 19,
    "name": "Конкурс STArt Open call",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 20,
    "name": "Дельфийские игры",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 21,
    "name": "Всероссийский конкурс «Идеи, преображающие города",
    "date": "04/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 22,
    "name": "Росмолодёжь. Гранты",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 23,
    "name": "Health Data Hack",
    "date": "03/03/2022",
    "category": "Хакатон",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 24,
    "name": "Конкурс STArt Open call",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
  {
    "id": 25,
    "name": "Дельфийские игры",
    "date": "03/03/2022",
    "category": "Конкурс проектов",
    "place": "г. Москва",
    "link": "https://fadm.gov.ru/news/63983",
  },
];

/***************************TEST DATA END****************************/


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

function EventTable() {
  return (
    <MaterialTable
      title="Все мероприятия"
      columns={[
        { 
          title: 'id',
          field: 'id',
          hidden: true },
        { 
          title: 'Название',
          field: 'name',
          render: row => <div onClick={() => window.alert("TEST")}>{ row.name }</div>
        },
        { 
          title: 'Дата',
          field: 'date',
          type: 'date',
          render: rowData => new Date(rowData.date).toLocaleDateString(),
          filterComponent: ({ columnDef, onFilterChanged }) => (
            <MuiPickersUtilsProvider utils={ RuLocalizedUtils } locale={ ruLocale }>
              <DatePicker
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
            'Конкурс проектов': 'Конкурс проектов',
            'Акселератор': 'Акселератор',
            'Хакатон': 'Хакатон',
            'Конференция': 'Конференция',
            'Другое': 'Другое',
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
      ]}

      data={ data }        
      options={{
        sorting: true,
        selection: true,
        filtering: true,
        thirdSortClick: false,
        maxBodyHeight: "70vh",
        emptyRowsWhenPaging: false,
        pageSize: 10,
        pageSizeOptions: [5, 10, 20],
      }}
    />
  )
}

export default EventTable;
