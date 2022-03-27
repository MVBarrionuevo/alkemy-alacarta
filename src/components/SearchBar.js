import React from 'react';
import { Field, Form, Formik } from 'formik';

function SearchBar(props) {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 jumbotron-title">ALACARTA</h1>
                <p className="lead">Encontrá nuestras especialidades del menú.</p>
                <nav className="navbar">
                    <div className="search-bar container-fluid">
                        <Formik
                            initialValues={{ search: '' }}
                            validate={(values) => {
                                const errors = {};
                                if (values.search.length <= 2) {
                                    errors.search = true;
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                props.onSubmit(values.search);
                            }}
                        >
                            {({ errors, dirty }) => {
                                return (
                                    <Form className="d-flex">
                                        <Field name="search" className="form-control me-2" placeholder="Buscar platos..." aria-label="Search" />
                                        <button type="submit" className="btn btn-success" disabled={!dirty || errors.search}>Buscar</button>
                                    </Form>
                                )
                            }}

                        </Formik>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export { SearchBar };