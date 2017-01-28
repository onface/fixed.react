var React = require('react')
import {Fixed, FixedCnt, FixedLeft, FixedRight} from "fixed.react"

var App = React.createClass({
    render: function () {
        var self = this
        return (
            <Fixed
                className="mockWindow"
                spaceClassName={[
                    'm-sidebar-space',
                    'm-nav-space'
                ]}
            >
                <FixedLeft>
                    <div className="m-sidebar">
                        sidebar
                    </div>
                </FixedLeft>
                <FixedCnt className={"horizontal-scroll"} >
                    <div style={{
                        "overflowX": "auto",
                        "whiteSpace": "nowrap",
                        "height": "100px"
                    }} >
                        a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z a b c d e f g h i j k l m n o p q r s t u v w x y z
                    </div>
                </FixedCnt>
                <FixedRight>
                    <div className="m-nav">
                        sidebar
                    </div>
                </FixedRight>
            </Fixed>
        )
    }
})
module.exports = App
