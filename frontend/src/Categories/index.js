import React from 'react';
import randomstring from 'randomstring';
import {
  TabbedShowLayout,
  Tab,
  List,
  Create,
  SimpleForm,
  Edit,
  Show,
  ReferenceManyField,
  Datagrid,
  EditButton,
  TextField,
  TextInput,
  required,
} from 'react-admin';
import { url } from '../config/connection';
import AddBookButton from './AddBookButton';

const validateRequired = required();

const CategoryCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="show">
        <TextInput source="name" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};

const CategoryTitle = ({ record }) => (<span>{record.name}</span>);

const CategoryEdit = props => {
  return (
    <Edit {...props} title={<CategoryTitle />}>
      <SimpleForm redirect="list">
        <TextInput source="name" />
        <TextInput source="description" />

      </SimpleForm>
    </Edit>
  );
};

const CategoryShow = props => (
  <Show {...props} title={<CategoryTitle />}>
    <TabbedShowLayout>
      <Tab label="summary">
        <TextField source="name" />
        <TextField source="description" />
      </Tab>
      <Tab label="books" path="books">
        <ReferenceManyField reference="book" target="categoryId" addLabel={false}>
          <Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="ISBN" />
            <TextField source="author" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
        <AddBookButton />
      </Tab>
    </TabbedShowLayout>
  </Show>
);

const CategoryDescription = ({ record }) => {
  return <div>{record.description}</div>;
};

const CategoryList = props => (
  <List {...props}>
    <Datagrid rowClick="show" expand={<CategoryDescription />}>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export default {
  list: CategoryList,
  create: CategoryCreate,
  edit: CategoryEdit,
  show: CategoryShow,
};
