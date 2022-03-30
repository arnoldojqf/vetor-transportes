import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux
} from 'ba-components/Forms/ReduxFormMUI';
import {
  fetchAction,
  addAction,
  closeAction,
  submitAction,
  removeAction,
  editAction,
  closeNotifAction
} from 'ba-actions/CrudTbFrmActions';
import { CrudTableForm, Notification } from 'ba-components';
import {
  Paper,
  MenuItem,
  InputLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';
import { anchorTable, dataApi } from './data';
import { accountService } from '../../../services/account.service'


const branch = 'crudTbFrmAccounts';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = ({
  root: {
    flexGrow: 1,
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  }
});

var dataApiDB = [];
accountService.getAll().then(data => { dataApiDB = data; console.log('dataApiDB', dataApiDB); });

class CrudTbFormAccounts extends Component {
  saveRef = ref => {
    this.ref = ref;
    return this.ref;
  };  

  render() {
    const {
      classes,
      fetchData,
      addNew,
      closeForm,
      submit,
      removeRow,
      editRow,
      dataTable,
      openForm,
      initValues,
      closeNotif,
      messageNotif,
    } = this.props;
    const trueBool = true;
    return (      
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <Paper className={classes.root}>
          <CrudTableForm
            dataTable={dataTable}
            openForm={openForm}
            dataInit={dataApiDB}
            anchor={anchorTable}
            title="Title of Table"
            fetchData={fetchData}
            addNew={addNew}
            closeForm={closeForm}
            submit={submit}
            removeRow={removeRow}
            editRow={editRow}
            branch={branch}
            initValues={initValues}
          >
            {/* Create Your own form, then arrange or custom it as You like */}
            <div>
              <Field
                name="_id"
                component={TextFieldRedux}
                placeholder="Text Field"
                label="Text Field"
                validate={required}
                required
                ref={this.saveRef}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="firstName"
                component={TextFieldRedux}
                placeholder="Nome"
                label="Nome"
                required
                validate={[required]}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="lastName"
                component={TextFieldRedux}
                placeholder="Sobrenome"
                label="Sobrenome"
                required
                validate={[required]}
                className={classes.field}
              />
            </div>
            <div>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder="Email"
                label="Email"
                required
                validate={[required, email]}
                className={classes.field}
              />
            </div>
            <div>
              <FormControl className={classes.field}>
                <InputLabel htmlFor="role">Perfil</InputLabel>
                <Field
                  name="role"
                  component={SelectRedux}
                  placeholder="Selecione o perfil"
                  autoWidth={trueBool}
                >
                  <MenuItem value="Admin">Administrador</MenuItem>
                  <MenuItem value="User">Operador</MenuItem>
                  <MenuItem value="Driver">Motorista</MenuItem>
                </Field>
              </FormControl>
            </div>
            {/* No need create button or submit, because that already made in this component */}
          </CrudTableForm>
        </Paper>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

CrudTbFormAccounts.propTypes = {
  dataTable: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  initValues: PropTypes.object.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  initValues: state.getIn([branch, 'formValues']),
  dataTable: state.getIn([branch, 'dataTable']),
  openForm: state.getIn([branch, 'showFrm']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addNew: bindActionCreators(addAction, dispatch),
  closeForm: bindActionCreators(closeAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const CrudTbFormAccountsMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTbFormAccounts);

export default withStyles(styles)(CrudTbFormAccountsMapped);
