// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>.
//
// https://documize.com

import Component from '@ember/component';

export default Component.extend({
	tagName: 'nav',
	classNames: ['layout-sidebar', 'non-printable'],
	classNameBindings: ['scrollable:sidebar-scroll'],
	scrollable: false,

	didInsertElement() {
		this._super(...arguments);
		// let sb = this.$().overlayScrollbars({ scrollbars: { autoHide: 'leave' }});
		// this.set('scrollbars', sb);
	},

	willDestroyElement() {
		this._super(...arguments);

		// let sb = this.get('scrollbars');
		// sb.destroy();
	}
});
