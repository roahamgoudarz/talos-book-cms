import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required,
  TabbedShowLayout,
  Tab,
  TextField,
  Show,
  ReferenceField,
  List,
  Datagrid,
  ReferenceInput,
  SelectInput,
  Filter,
} from 'react-admin';
import { parse } from 'query-string';

const validateRequired = required();

export const BookCreate = props => {
  const { location } = props;
  const { categoryId } = parse(location.search);
  const redirect = categoryId ? `/category/${categoryId}/show/books` : false;

  return (
    <Create {...props}>
      <SimpleForm redirect={redirect}>
        <TextInput source="name" validate={validateRequired} />
        <TextInput source="description" validate={validateRequired} />
        <TextInput source="ISBN" validate={validateRequired} />
        {categoryId ? null : (
          <ReferenceInput source="categoryId" reference="category">
            <SelectInput optionText="name" optionValue="id" />
          </ReferenceInput>
        )}
      </SimpleForm>
    </Create>
  );
};

const BookTitle = ({ record }) => (<span>{`${record.name}`}</span>);

export const BookEdit = props => (
  <Edit {...props} title={<BookTitle />}>
    <SimpleForm redirect={(basePath, id, data) => `/category/${data.categoryId}/show/books`}>
      <TextInput source="name" validate={validateRequired} />
      <TextInput source="description" validate={validateRequired} />
      <TextInput source="ISBN" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const BookList = props => (
  <List {...props} filters={<PostFilter />}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="ISBN" />
      <TextField source="author" />
      <TextField source="last_review" />
      <ReferenceField
        source="categoryId"
        reference="category"
        linkType="show"
      >
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const BookShow = props => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="resources.summary.name">
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="ISBN" />
        <ReferenceField
          source="categoryId"
          reference="category"
          linkType="show"
        >
          <TextField source="name" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>

);

export default {
  list: BookList,
  create: BookCreate,
  edit: BookEdit,
  show: BookShow,
};
