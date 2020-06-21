import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }

        // If you passed an empty array. useEffect will execute it's function argument
        // only when the component is mounted (and rendered for the 1st time) or unmounted.
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
        // When there isn't a second argument after the function -
        // useEffect will run for every update cycle of the component.
    });

    // useEffect(); We can use multiple separate calls of useEffect.
    // In order to use useEffect as componentDidMount - we need to pass it another argument which is an empty array.
    // In case of a dependency of a certain field - we can pass in the empty array

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength.length <= 2) {
        assignedClasses.push(classes.red) // assignedClasses = ['red']
    }
    if (props.personsLength.length <= 1) {
        assignedClasses.push(classes.bold) // assignedClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(Cockpit);