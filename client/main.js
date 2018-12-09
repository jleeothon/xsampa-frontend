import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import translate from 'xsampa';

import './main.html';

Template.hello.onCreated(function () {
  this.ipa_output = new ReactiveVar('');
});

Template.hello.helpers({
  ipa_output() {
    return Template.instance().ipa_output.get();
  }
});

Template.hello.events({
  'input input'(event, instance) {
    event.preventDefault();
    console.log(event.target.value);
    instance.ipa_output.set(translate(event.target.value));
  },
});
