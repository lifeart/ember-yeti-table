import Component from '@ember/component';

import { tagName } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';
import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, arrayOf } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from './template';

@tagName('thead')
export default class Header extends Component {
  layout = layout;

  @argument
  @required
  @type(Component)
  parent;

  @argument
  @required
  @type(arrayOf(Component))
  columns;

  @argument
  @type(arrayOf('object'))
  sortings;

  @argument
  @required
  @type(Action)
  onColumnClick;

  @action
  onColumnClick(column, e) {
    if (this.get('onColumnClick') && column.get('sortable')) {
      this.get('onColumnClick')(column, e);
    }
  }
}
