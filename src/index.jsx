import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, SpacePage, useState, useEffect } from '@forge/ui';
import _, { reject } from "lodash";



const fetchContributorsA = async () =>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=history`);
  const data = await res.json();
  let count = 0;
  data.results.map(page => {
    page.history.createdBy.publicName === "ANVITHA GBH" && count++;
  });
  return count;

}


const fetchContributorsB = async () =>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=history`);
  const data = await res.json();
  let count = 0;
  data.results.map(page=>{
    page.history.createdBy.publicName === "BAVITHRA R" && count++;
  });
  return count;
}

const fetchContributorsC = async () =>{
  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=history.lastUpdated`);
  const data = await res.json();
  let count = 0;
  data.results.map(page=>{
  let num = page.history.lastUpdated.number;
  if(count < num) {
    count = num;
  }
  });
  console.log(count);
  return count;
}


const App = () => {

  const [countA, setCountA] = useState("Hello");
  const [countB, setCountB] = useState("Hello");
  const [countC, setCountC] = useState("Hello");

  useEffect(async ()=>{
    const result1 = await fetchContributorsA();
    const result2 = await fetchContributorsB();
    const result3 = await fetchContributorsC();
    setCountA(result1);
    setCountB(result2);
    setCountC(result3);
  },[]);

  return (
    <Fragment>
      <Text>Number of Pages Anvitha created: {countA}</Text>
      <Text>Number of Pages Bavithra created: {countB}</Text>
      <Text>Most updated page count: {countC}</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);
/**import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, SpacePage, useEffect, useState } from '@forge/ui';
import _, { reject } from "lodash";


const fetchData = async ()=>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=body.view`);

  const data = await res.json();
  const pageContent =  _.get(data, "size");  
  console.log("Size: ", pageContent);
  return pageContent;

}



const App = () => {

  const [sample, setSample] = useState("Hello Anvitha!");

  useEffect(async ()=>{
    const content = await fetchData();
    setSample(content);
  },[]);

  console.log("Response: ", sample);

  return (
    <Fragment>
      <Text> Number Of Pages in 1st space: {sample - 1}</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);
/*import ForgeUI, { render, Fragment, Text, SpacePage } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);*/
/*import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, SpacePage, useEffect, useState } from '@forge/ui';
import _, { reject } from "lodash";


const fetchData = async ()=>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content/30965761?expand=body.view`);

  const data = await res.json();
  const pageContent =  _.get(data, "body.view.value");
  console.log("Page: ", pageContent);
  return pageContent;

}



const App = () => {

  const [sample, setSample] = useState("Hello Anvitha!");

  useEffect(async ()=>{
    const content = await fetchData();
    setSample(content);
  },[]);

  console.log("Response: ", sample);

  return (
    <Fragment>
      <Text>{sample}</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);
/*import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, SpacePage, useState, useEffect } from '@forge/ui';



const fetchContributorsA = async () =>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=history`);
  const data = await res.json();
  let count = 0;
  data.results.map(page => {
    page.history.createdBy.publicName === "ANVITHA GBH" && count++;
  });
  return count;

}


const fetchContributorsB = async () =>{

  const res = await api.asUser().requestConfluence(route `/wiki/rest/api/content?expand=history`);
  const data = await res.json();
  let count = 0;
  data.results.map(page=>{
    page.history.createdBy.publicName === "BAVITHRA R" && count++;
  });
  return count;
}



const App = () => {

  const [countA, setCountA] = useState("Hello");
  const [countB, setCountB] = useState("Hello");

  useEffect(async ()=>{
    const result1 = await fetchContributorsA();
    const result2 = await fetchContributorsB();
    setCountA(result1);
    setCountB(result2);
  },[]);

  return (
    <Fragment>
      <Text>Number of Pages Anvitha created: {countA}</Text>
      <Text>Number of Pages Bavithra created: {countB}</Text>
    </Fragment>
  );
};

export const run = render(
  <SpacePage>
    <App />
  </SpacePage>
);
*/