import React from 'react';
import _ from 'lodash';
import classNames from '../utils/classNames';

import safePrefix from '../utils/safePrefix';
import markdownify from '../utils/markdownify';
import link from '../utils/link';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="content">
                    <h1><a href={(_.get(this.props, 'pageContext.site.siteMetadata.header.title_url').startsWith('#') ? _.get(this.props, 'pageContext.site.siteMetadata.header.title_url') : safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.title_url')))}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</a></h1>
                    {markdownify(_.get(this.props, 'pageContext.site.siteMetadata.header.subtitle'))}
                    {_.get(this.props, 'pageContext.site.siteMetadata.header.actions') && 
                        <ul className="actions">
                            {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.actions'), (action, action_idx) => (
                                <li key={action_idx}><a href={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(link(this.props.pageContext.pages, _.get(action, 'url'))))} className={'button' + (_.get(action, 'is_primary') ? ' primary' : '') + (_.get(action, 'icon') ? ' icon ' + _.get(action, 'icon') : '') + (_.get(action, 'is_scrolly') ? ' scrolly' : '')}>{_.get(action, 'label')}</a></li>
                            ))}
                        </ul>
                    }
                </div>
                {_.get(this.props, 'pageContext.site.siteMetadata.header.img') && 
                    <div className={classNames('image', {'phone': _.get(this.props, 'pageContext.site.siteMetadata.header.img.phone_border')})}><div className="inner"><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.img.path'))} alt="" /></div></div>
                }
            </header>
        );
    }
}
