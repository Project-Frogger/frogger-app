import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";
import DateFnsUtils from "@date-io/date-fns";

import { 
  MuiPickersUtilsProvider, KeyboardDatePicker
}  from "@material-ui/pickers";


class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: this.locale });
  }

  getDatePickerHeaderText(date) {
    return format(date, "dd MMMM", { locale: this.locale });
  }
}

const CustomDatePicker = ({ columnDef, onFilterChanged }) => {
  return(
    <MuiPickersUtilsProvider utils={ RuLocalizedUtils } locale={ ruLocale }>
    <KeyboardDatePicker
      className='filter-date-picker'
      clearLabel="Очистить"
      format={ "dd.MM.yyyy" }
      cancelLabel={ "Отмена" }
      onChange={(date) => {
        onFilterChanged(columnDef.tableData.id, date);
      }}
      value={ columnDef.tableData.filterValue || null }
      clearable
    />
  </MuiPickersUtilsProvider>
  )
}

export default CustomDatePicker;
