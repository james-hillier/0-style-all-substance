import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import markdownify from '../utils/markdownify';
import link from '../utils/link';
import safePrefix from '../utils/safePrefix';

export default class Cta extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <header className="major">
                    <h2>{ReactHtmlParser(_.get(this.props, 'section.title').replace(/\n/g, '<br />'))}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                {_.get(this.props, 'section.actions') && 
                    <ul className="actions special">
                        {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                            <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={'button' + (_.get(action, 'is_primary') ? ' primary' : '') + (_.get(action, 'icon') ? ' icon ' + _.get(action, 'icon') : '') + (_.get(action, 'is_scrolly') ? ' scrolly' : '')}>{_.get(action, 'label')}</a></li>
                        ))}
                    </ul>
                }
            </section>
        );
    }
}
