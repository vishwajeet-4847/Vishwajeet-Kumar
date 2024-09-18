import React from "react";
import SpanTitle from "../components/utility/span-title";

const TitleInfo = () => (
    <div className="title-info">
        <h3>
        <SpanTitle title="Web Developer" />{" "}
            <SpanTitle title="App Developer" />{" "}
            <SpanTitle title="Graphic Designer" />
      </h3>
    </div>
);

export default TitleInfo;