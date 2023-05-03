import React from 'react';

const Errorpage = () => {
    const { error, status}=useRouteError()
    return (
        <section className='flex justify-center items-center h-screen p-16 bg-gray-100 text-gray-900'>
      
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          
    
    </section>
    );
};

export default Errorpage;