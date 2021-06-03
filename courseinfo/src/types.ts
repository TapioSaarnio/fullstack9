/*
export interface CoursePart {
    name: string;
    exerciseCount: number;
}
*/

export interface CourseParts {
    courseParts: CoursePart[];
}

export interface SinglePart {
  coursePart: CoursePart;
}

 // new types
 export interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  export interface CoursePartWDescription extends CoursePartBase {
    description: string;
  }
  
  export interface CoursePartOne extends CoursePartWDescription {
    name: "Fundamentals";
    //description: string;
  }
  
  export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
  export interface CoursePartThree extends CoursePartWDescription {
    name: "Deeper type usage";
    //description: string;
    exerciseSubmissionLink: string;
  }

  export interface CoursePartFour extends CoursePartWDescription {
    name: "Becoming a god";
  }
  
  export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour ;