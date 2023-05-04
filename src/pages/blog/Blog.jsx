import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='container mx-auto'>
            <div ref={ref}>
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
            </div>

            <div className='text-center'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary my-5 ' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                
            </div>


        </div>
    );
};

export default Blog;