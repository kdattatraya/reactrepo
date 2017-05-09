import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import Hello from './components/course/Hello';
import LoginForm from './components/loginform/loginform';

export default (
  <div>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/welcome" component={Hello} />
    <Route path="/login" component={LoginForm} />
  </div>
);
