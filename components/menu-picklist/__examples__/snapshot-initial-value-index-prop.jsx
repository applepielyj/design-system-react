/* eslint-disable no-console, react/prop-types */
import React from 'react';
import createReactClass from 'create-react-class';

// Higher Order Components such as `react-onclickoutside` use the DOM and Jest snapshot testing must be DOMless
import MenuPicklist from '~/components/menu-picklist';
import IconSettings from '~/components/icon-settings';

const Example = createReactClass({
    displayName: 'MenuPicklistExample',

    getSelectedValueIndex () {
        const now = new Date("October 13, 2018");
        const selectedYear = 2014;
        const fromYear = now.getFullYear() - 4;
        return selectedYear - fromYear;
    },

    render () {
        return (
            <IconSettings iconPath="/assets/icons">
                <MenuPicklist
                    id="sample-menu-picklist"
                    isInline
                    label="Contacts"
                    onSelect={(value) => {
                        console.log('selected: ', value);
                    }}
                    options={[
                        { label: 'Option A', value: 2014 },
                        { label: 'Option B', value: 2015 },
                        { label: 'Option C', value: 2016 },
                        { label: 'Option D', value: 2017 },
                        { label: 'Option E', value: 2018 }
                    ]}
                    placeholder="Select a contact"
                    value="2014"
                    valueIndex={this.getSelectedValueIndex()}
                />
            </IconSettings>
        );
    },
});

export default Example;
