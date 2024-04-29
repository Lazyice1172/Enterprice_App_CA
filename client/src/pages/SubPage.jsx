import React from 'react';
import BackButton from '../components/BackButton'

const SubPage = () => {
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Description</h1>
      <p className='mb-4'>
        This application is developed using Vite and React for the front-end and ExpressJS for the back-end.
      </p>

      <h3 className='text-2xl my-4'>How the Front-End Develops and Functions</h3>
      <p className='mb-4'>
        The front-end leverages Vite to speed up development by utilizing native ES modules, on-demand compilation,
        and faster Hot Module Replacement (HMR). This results in quicker development server startups,
        rapid module resolution, and an overall smoother and more efficient development experience.
      </p>
      <p className='mb-4'>
        The <code>App.jsx</code> component is pivotal in managing routing, directing users to the correct pages:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Home</li>
        <li>CreateCategories</li>
        <li>DeleteCategories</li>
        <li>EditCategories</li>
        <li>ShowCategories</li>
      </ul>
      <p className='mb-4'>
        On the Home page, data from the MongoDB database is displayed in a list format, with functionality
        to search and filter results. This is achieved through AJAX GET requests made via axios to the backend.
      </p>
      <p className='mb-4'>
        <code>axios.RESTfulAPI(`URL`)</code> is an AJAX method used to retrieve data from the server, with the response data stored in the component's state.
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li><code>`GET`</code> the get method will request data from the server.</li>
        <li><code>`POST`</code> the post method will send data to the server.</li>
        <li><code>`PUT`</code> the put method will update data on the server.</li>
        <li><code>`DELETE`</code> the delete method will delete data from the server.</li>
      </ul>
      <p className='mb-4'>
        Each page, similar to the Home page, uses axios to send RESTful API requests to the backend,
        handling data retrieval or updates as required.
      </p>

      <h3 className='text-2xl my-4'>How the Back-End Develops and Functions</h3>
      <p className='mb-4'>
        Developed with ExpressJS, the back-end setup includes:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li><code>connection.js</code> - Establishes a connection to the MongoDB database.</li>
        <li><code>categories.js</code> - Manages all routes for client interactions, facilitating data uploads and retrievals from MongoDB.</li>
        <li><code>server.js</code> - Configures the server to listen on port 5050 for incoming requests.</li>
      </ul>
      <p>
        The use of the cors module allows the server to accept requests from clients on different ports, enhancing cross-origin resource sharing capabilities.
      </p>

      <h3 className='text-2xl my-4'>Technology Used</h3>
      <ul className='list-disc list-inside mb-4'>
        <li>Vite</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>Express</li>
        <li>Node</li>
        <li>MongoDB</li>
      </ul>

      <h3 className='text-2xl my-4'>Weakness with this application</h3>
      <p className='mb-4'>
        This application didn't store the data in the client side, which cause it need to fetch the data from the server every time the page is refreshed.
      </p>

      <p className='mb-4'>
        This Website didn't a have a good UI/UX design, which make it hard to use.
      </p>

      <h3 className='text-2xl my-4'>What can improve in my application</h3>
      <p className='mb-4'>
        To improve this application :
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>First, the client should implement a client-side data storage like localStorage or sessionStorage to store data locally on the client-side to prevent fetch the data from the server every time the page is refreshed </li>
        <li>Second, Enhace UI/UX design, </li>
      </ul>
    </div>
  );
}

export default SubPage;
