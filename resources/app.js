import './bootstrap';
import 'flowbite';
import { Dropdown } from 'flowbite';

/*
* $targetEl: required
* $triggerEl: required
* options: optional
*/
const dropdown = new Dropdown($targetEl, $triggerEl, options);
// set the dropdown menu element
const $targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton');

// options with default values
const options = {
  placement: 'bottom',
  triggerType: 'click',
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  ignoreClickOutsideClass: false,
  onHide: () => {
      console.log('dropdown has been hidden');
  },
  onShow: () => {
      console.log('dropdown has been shown');
  },
  onToggle: () => {
      console.log('dropdown has been toggled');
  }
};