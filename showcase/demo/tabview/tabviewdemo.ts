import {Component} from 'angular2/core';
import {TabView} from '../../../components/tabview/tabview';
import {CodeHighlighter} from '../../../components/codehighlighter/codehighlighter';
import {TabPanel} from '../../../components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: 'showcase/demo/tabview/tabviewdemo.html',
    directives: [TabView,TabPanel,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class TabViewDemo {

    activeTabIndex: number = 1;
}