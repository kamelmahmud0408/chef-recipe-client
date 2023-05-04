import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary my-5 ' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>

            </div>
            <div className=' ' ref={ref}>
                <div >

                    <h1 className='text-4xl mt-10'>Question-1</h1>
                    <h3 className='text-xl mt-3'>the differences between uncontrolled and controlled components</h3>
                    <p className='mt-5'>
                        Components refer to reusable pieces of code that can be combined to create larger software systems. There are two main types of components: uncontrolled and controlled components.

                        Uncontrolled components are components that have their own internal state management and are responsible for rendering themselves. They are also called "dumb" components because they do not have any logic to manage their own state, and they simply render whatever is passed to them as props. Examples of uncontrolled components include HTML input elements like input  and textarea, as well as UI elements like buttons and dropdown menus.
                        <br />
                        On the other hand, controlled components are components that are controlled by their parent components through props. They do not have their own internal state management and rely on their parent components to manage their state. Controlled components are also known as "smart" components because they have logic to manage their own state. Examples of controlled components include form components like input and textarea, as well as complex UI elements like date pickers and sliders.
                    </p>
                    <hr className='mt-3 text-slate-600' />
                </div>

                <div>

                    <h1 className='text-4xl mt-10'>Question-2</h1>
                    <h3 className='text-xl mt-3'>How to validate React props using PropTypes</h3>
                    <p className='mt-5'>
                        React PropTypes is a library that allows you to validate the props passed to your React components at runtime. PropTypes provide a way to ensure that the data types of props passed to a component match what the component expects. This helps to catch errors and prevent bugs before they occur.

                        To use PropTypes, you need to import the prop-types library and define the propTypes for your component. The PropTypes library provides a range of validators for different types of data, including strings, numbers, booleans, arrays, and objects. Here are some of the most common PropTypes validators:

                        <li>PropTypes.string: Validates that the prop is a string.</li>
                        <li>PropTypes.number: Validates that the prop is a number.</li>
                        <li>PropTypes.bool: Validates that the prop is a boolean value.</li>
                        <li> PropTypes.array: Validates that the prop is an array.</li>
                        <li>PropTypes.object: Validates that the prop is an object.</li>
                        <li> PropTypes.func: Validates that the prop is a function.</li>
                        <li> PropTypes.element: Validates that the prop is a React element.</li>
                    </p>
                    <hr className='mt-3 text-slate-600' />

                </div>
                <div>
                    <h1 className='text-4xl mt-10'>Question-3</h1>
                    <h3 className='text-xl mt-3'>The difference between nodejs and express js</h3>
                    <p className='mt-5'>
                        Node.js and Express.js are both popular web development frameworks for building server-side applications using JavaScript. While they are related, they have different purposes and functionality.
                        <br />
                        Node.js is a JavaScript runtime built on the V8 JavaScript engine that allows you to run JavaScript code outside of the browser, on the server-side. It provides a set of built-in libraries and modules that allow developers to build server-side applications using JavaScript. Node.js is efficient, scalable, and can handle a large number of concurrent connections.
                        <br />
                        Express.js, on the other hand, is a minimalist and flexible Node.js web application framework that allows you to build web applications and APIs quickly and easily. It provides a set of features and tools for building web applications, such as routing, middleware, and templating engines. Express.js is often used in conjunction with Node.js to simplify web application development.
                    </p>
                    <hr className='mt-3 text-slate-600' />

                </div>
                <div>
                    <h1 className='text-4xl mt-10'>Question-4</h1>
                    <h3 className='text-xl mt-3'>What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='mt-5'>
                        In React, a custom hook is a reusable piece of logic that encapsulates and abstracts away some functionality that can be shared across multiple components. It's essentially a JavaScript function that starts with the use keyword, and can use built-in React hooks, such as useState, useEffect, useContext, and others.
                            <br />
                        A custom hook allows you to extract common functionality from components and reuse it in other parts of your application. This can help to reduce code duplication, improve code organization, and make your code more modular and reusable.
                         <br />
                        You might create a custom hook when you find yourself duplicating code across multiple components that have similar behavior or when you want to share functionality that requires state management or side effects. For example, you might create a custom hook to fetch data from an API, manage form state, or handle window resize events.
                    </p>
                    <hr className='mt-3 text-slate-600' />

                </div>
            </div>
        </div>
    );
};

export default Blog;