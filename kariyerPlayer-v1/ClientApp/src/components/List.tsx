import * as React from "react"
// import ListItem from "./list/listItem"
import './list/list.css'

import { render } from "react-dom";

function List(props: any) {
    // let listItemList: ListItem[] = [];

    // let p1 = new ListItem('test', '2:28', '123');
    // let p2 = new ListItem('atakan', '1:33', '732');
    // let p3 = new ListItem('hakki', '9:41', '127.125');
    // let p4 = new ListItem('test 4', '5:12', '976.123');

    // listItemList.push(p1);
    // listItemList.push(p2);
    // listItemList.push(p3);
    // listItemList.push(p4);

    return (
        <section className="main">

            <span className="singer">Yunb (feat. UglyDuck) - Single</span>
            <h1>Runaway Pt.2 </h1>
            <ul className="tag">
                <li>korean</li>
                <li>electronic</li>
                <li>pop</li>
                <li>future-based</li>
            </ul>
            <ul className="music-list">
                {/* {
                    listItemList.map((elem: ListItem) => {
                        console.log(elem)
                        return (elem.Write())
                    })
                } */}
            </ul>
        </section>
    )
}

const styles = {
    main: {
        padding: '100px 110px',
        fontSize: "100px"
    } as React.CSSProperties
}


export default List;