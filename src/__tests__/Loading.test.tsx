// import { cleanup, render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { ReactElement } from "react";
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { Provider } from "react-redux";
import {store} from "./../store/configureStore";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import  Loading from '../pages/Loading/Loading';

describe('<Loading />: Loading Screen', () => {
    
    it('shows loader while data is loading', () => {
            const component = mount(
                <Provider store={store} >
                    <Loading />
                </Provider>
            );
            
        const loaderText = component.find('p.loader-text').getDOMNode();
                
        expect(component).toMatchSnapshot();
        expect(loaderText.innerHTML).toBe('Almost there');
    });

    it('displays error if unknown city is sent', (done) => {
        let component =mount(
            <Provider store={store} >
                    <Loading />
            </Provider>,
        );

        // const loaderText = component.find('p.loader-text').getDOMNode();
        // expect(loaderText.innerHTML).toBe('Almost there');

        // const mockResponse = (status:number, response:any) => {
        //     return new Response(response, {
        //         status: status,
        //         headers: {
        //             'Content-type': 'application/json'
        //         }
        //     });
        // }
        
        // setTimeout(() => {
        //     component.update();
        //     console.log(component.debug());
        //     done();
        //   }, 10000)
        // async (done:any) => {
        //     const fakePromise = Promise.resolve(mockResponse(
        //         404,
        //         JSON.stringify({message: 'city not found'})
        //      ));
        //      window.fetch = jest.fn().mockImplementationOnce(() => {
        //          return fakePromise
        //      });
        //      console.log('hey');
             
        //     //  expect.assertions(2);
        //      const wrapper = mount(<Loading  />);
        //      await Promise.all([fakePromise]);
        //      setImmediate(() => {
        //          try {
        //              console.log(wrapper.find('p.loader-text').getDOMNode().innerHTML);
                     
        //             expect(wrapper.find('p.loader-text').getDOMNode().innerHTML).toContain('not jnkhj!')
        //          } catch (e) {
        //              done.fail(e);
        //          }
        //          done();
        //      });
        //     }
    });
});