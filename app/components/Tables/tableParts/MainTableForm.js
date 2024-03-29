import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AddIcon from '@material-ui/icons/Add';
import css from 'ba-styles/Table.scss';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Tooltip,
  Button,
} from '@material-ui/core';
import RowReadOnly from './RowReadOnly';
import styles from './tableStyle-jss';


class MainTableForm extends React.Component {
  render() {
    const {
      title,
      classes,
      items,
      removeRow,
      editRow,
      addNew,
      anchor,
      branch
    } = this.props;
    const getItems = dataArray => dataArray.map(item => (
      <RowReadOnly
        item={item}
        removeRow={() => removeRow(item, branch)}
        key={item.get('id')}
        editRow={() => editRow(item, branch)}
        anchor={anchor}
        branch={branch}
      />
    ));

    const getHead = dataArray => dataArray.map((item, index) => {
      if (!item.hidden) {
        return (
          <TableCell padding="none" key={index.toString()} width={item.width}>{item.label}</TableCell>
        );
      }
      return false;
    });
    return (
      <div>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="h6">{title}</Typography>
          </div>
          <div className={classes.spacer} />
          <div className={classes.actions}>
            <Tooltip title="Add Item">
              <Button variant="contained" onClick={() => addNew(anchor, branch)} color="secondary" className={classes.button}>
                <AddIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Add New
              </Button>
            </Tooltip>
          </div>
        </Toolbar>
        <div className={classes.rootTable}>
          <Table className={classNames(css.tableCrud, classes.table, css.stripped)}>
            <TableHead>
              <TableRow>
                { getHead(anchor) }
              </TableRow>
            </TableHead>
            <TableBody>
              {getItems(items)}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

MainTableForm.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  anchor: PropTypes.array.isRequired,
  addNew: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles)(MainTableForm);
