import SubjectList from "./SubjectList";
import Counter from "./Counter";
import TempConverter from "./TempConverter";

const CMSCSubjects = [
    {code: "CMSC100", description: "Web Programming", id: 1},
    {code: "CMSC150", description: "Scientific Computation", id: 2},
    {code: "CMSC22", description: "Object-Oriented Programming", id: 3},
];

const CHEMSubjects = [
    {code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1},
    {code: "CHEM10", description: "Chemical Kinetics", id: 2},
    {code: "CHEM11", description: "Introduction to Biochemistry", id: 3},
];

function App() {
    return (
        <div>
            Hello World!
            <SubjectList list={CMSCSubjects} title={"Computer Science"}/>
            <SubjectList list={CHEMSubjects} title={"Chemistry"}/>
            <Counter val={10}/>
            <TempConverter />
        </div>
    );
}

export default App;
