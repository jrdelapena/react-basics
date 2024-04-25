import React, {useState} from 'react';

function SubjectList(props){
    const subjectList = props.list;
    const [subjects, setSubjects] = useState(subjectList);
    
    function addSubject() {
        setSubjects((subjects) => {
            const newVal = [...subjects, { code: "CMSC23", description: "Mobile Development" }];
            console.log(newVal);
            return newVal;
        })
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <ol>
                {subjects.map(subject => <li key={subject.id}>{subject.code} - {subject.description}</li>)}
            </ol>
            <button onClick={addSubject}>Add Subject</button>
        </div>
    )
}

export default SubjectList;