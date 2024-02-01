/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/w9gsS6YM8gD
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Logo from "../../../assets/Logo/logo.png";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

const data = [
  {
    id: 1,
    question: "20+6?",
    options: ["26", "20", "25", "24"],
    correctAnswer: "26",
  },
  {
    id: 2,
    question: "2+2=?",
    options: ["1", "2", "4", "3"],
    correctAnswer: "4",
  },
  {
    id: 3,
    question: "14+7 =?",
    options: ["21", "22", "23", "18"],
    correctAnswer: "21",
  },
  // Add more questions as needed
  {
    id: 4,
    question: "100+2=?",
    options: ["98", "100", "102", "101"],
    correctAnswer: "102",
  },
  {
    id: "5",
    question: "0+1=?",
    options: ["1", "-1", "0", "-2"],
    correctAnswer: "1",
  },
];

export default function Question({classes}) {
  const {subject,unit}=useParams();
  const selectedClass=classes.find((c)=> c.title.toLowerCase()===subject);
  const selectedUnit = selectedClass.units.find((u)=>u.name.toLowerCase()===unit);
  const imgRef = useRef(null);
  const profRef = useRef(null);
  const practiceRef = useRef(null);
  useGSAP(() => {
    var tl = gsap.timeline();

    tl.from([imgRef.current, profRef.current], {
      y: -100,
      duration: 0.5,
      stagger: 0.3,
      opacity: 0,
    });

    tl.from(practiceRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const question = data[questionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption !== null) {
      // Logic to handle the submitted answer
      const isCorrect = selectedOption === question.correctAnswer;
      console.log(
        `Selected Option: ${selectedOption}, Correct Answer: ${question.correctAnswer}, Correct: ${isCorrect}`
      );

      // Set answerSubmitted and isCorrectAnswer after submission
      setAnswerSubmitted(true);
      setIsCorrectAnswer(isCorrect);
    } else {
      // Display an error or notification for the user to choose an option
      console.log("Please choose an option before submitting.");
    }
  };

  const handleNextQuestion = () => {
    // Logic to move to the next question
    // Reset setAnswerSubmitted and setIsCorrectAnswer for the new question
    setAnswerSubmitted(false);
    setIsCorrectAnswer(false);

    // Check if the current answer is correct before enabling the next question

    setQuestionIndex((prevIndex) => (prevIndex + 1) % data.length);
    // Reset selected option for the new question
    setSelectedOption(null);
  };
  const handleReset = () => {
    // Reset selected option and question
    setSelectedOption(null);
    setAnswerSubmitted(false);
    setIsCorrectAnswer(false);
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#040404] dark:bg-gray-900 relative">
      <div className="w-[100%] flex flex-col justify-start items-center">
        <header className="flex  h-10 mb-5 dark:bg-gray-900 w-[95%] fixed top-12">
          <nav className="flex items-center justify-between w-[100%]  px-10 py-0">
            <div className="flex gap-4" ref={imgRef}>
              <div className=" h-[100px] w-[100px] flex items-center justify-center relative overflow-hidden">
                <Link to="/studentui">
                  <img
                    className="object-cover cursor-pointer "
                    src={Logo}
                    alt=""
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                {/* <LayoutDashboardIcon className="w-6 h-6" /> */}
                <span className="text-xl font-semibold  py-2  text-[#B3CCC2] rounded-md ">
                  PRACTICE
                </span>
                <span className="text-xl font-semibold  py-2  text-[#B3CCC2] rounded-md ">
                  : {selectedUnit.name}
                </span>
              </div>
            </div>
            <div ref={profRef}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      alt="User avatar"
                      src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    />
                    {/* <AvatarFallback>JD</AvatarFallback> */}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <UserIcon className="w-4 h-4" />
                      John Doe
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <MailIcon className="w-4 h-4" />
                      ums@gmail.com
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <LogOutIcon className="w-4 h-4" />
                      Logout
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>
        <div className="w-[95%] p-4 space-y-4 transition-all mt-5">
          <div
            className="flex flex-col p-6 bg-[#fff] rounded-lg shadow-md dark:bg-gray-800"
            ref={practiceRef}
          >
            <h1 className="mb-0 text-2xl font-bold text-center text-[#040404] dark:text-white">
              Practice Questions
            </h1>
            <br />
            <h2 className="text-lg font-bold text-gray-700 dark:text-white">{`Question ${
              questionIndex + 1
            }`}</h2>
            <p className="mt-2 text-lg text-[#040404] dark:text-gray-400">
              {question.question}
            </p>
            <div className="mt-4 space-y-2">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`block bg-[#E6F5FA] text-[#040404] font-semibold text-left dark:bg-gray-700 rounded-md p-3 cursor-pointer ${
                    answerSubmitted
                      ? option === question.correctAnswer
                        ? "bg-green-300"
                        : selectedOption === option
                        ? "bg-red-300"
                        : ""
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="mr-2"
                    value={option}
                    checked={option === selectedOption}
                    onChange={() => handleOptionChange(option)}
                    disabled={answerSubmitted}
                  />
                  {option}
                </label>
              ))}
            </div>
            {answerSubmitted && (
              <div
                className={`mt-4 ${
                  isCorrectAnswer ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrectAnswer
                  ? "Correct!"
                  : `Wrong! The correct answer is: ${question.correctAnswer}`}
              </div>
            )}
            <div className="flex justify-between mt-6 space-x-4">
              <button
                onClick={handleSubmitAnswer}
                className={`px-4 py-2 text-sm font-medium  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md  focus:outline-none focus:bg-indigo-500 ${
                  selectedOption === null
                    ? " opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={answerSubmitted || selectedOption === null}
              >
                Submit
              </button>
              <button
                onClick={handleReset}
                className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]  rounded-md  focus:outline-none focus:bg-blue-500${
                  selectedOption === null
                    ? " opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={selectedOption === null}
              >
                Reset
              </button>
              <button
                onClick={handleNextQuestion}
                className={`px-4 py-2 text-sm font-medium bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] rounded-md focus:outline-none focus:bg-blue-500 ${
                  !answerSubmitted || !isCorrectAnswer
                    ? " opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={!answerSubmitted || !isCorrectAnswer}
              >
                Next
              </button>
            </div>
          </div>
          <br />
          <Link to={`/detailspage/${subject}`}>
            <button className="px-6 py-3 text-lg font-semibold   bg-[#B3CCC2] text-[#040404] hover:bg-[#fff] hover:text-[#040404] rounded-md focus:outline-none focus:bg-indigo-500">
              Back To Classroom
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      opacity="0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
