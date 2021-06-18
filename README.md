# React_tutorials

- React is javascript library used to make user interface.
- Created at facebook and became open-source in 2013
  
  ## Reference for React Website:
- https://reactjs.org/
  
  ## Reference for React website creating tools
- https://create-react-app.dev/  

### Note :
- ctrl+shift+J is used to open react developer tool
- https://reactjs.org/

### Notes
- npx - package runner
- create-react-app - tool to build our project

## JXS (Javascript syntax extension)

- These are used to insert dynamic javascript in react component with HTML.
- you can use jsx within the curly braces

## In react you can make 2 types of compoenent
- class based component
- function based component

## Requirements
- We don't wanna NavBar inside the app compoenent
- App.js will lay the structure for our application.
- Break the website into different component.
- 1. Header component 2. Todos component 3. Todo Component

## Concepts of Props
- Pass props in the parameter.
- What is Props? props is javascript object, that we pass from parent component to child component.
- In this example we are passing title from parent component from parent to child component using props.
  
### DefaultProps & PropsType
  #### Proptype : 
  - These are used to make code robust.
  - Used to debug easily.
  #### Example : 
      Header.propTypes = {
        title : PropTypes.string
      }
  #### Default-proptype 
  - When user forget to mention default props, then default props override the value.
  #### Example : 
      Header.defaultProps = {
        title : "You're title is here"
      }









