import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAssignment, MdCheckCircle } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AssignmentControlButton from "./AssignmentControl";
import AssignmentButton from "./AssignmentButton";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControlButton />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentButton />
          </div>
          <ul id="wd-assignments-list" className="list-group rounded-0">
            <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="text-success me-3 fs-3" />
                <div>
                  <h6 className="mb-1 wd-black-bold">
                    <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                      A1
                    </a>
                  </h6>
                  <small style={{ color: "#a50c0c" }}>Multiple Modules</small>
                  <small className="text-muted">
                    {" | "}
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Not available until
                    </span>{" "}
                    May 6 at 12:00am
                  </small>
                  <br />
                  <small className="text-muted">
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Due
                    </span>{" "}
                    May 13 at 11:59pm | 100 pts
                  </small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <MdCheckCircle className="text-success me-4 fs-4" />
                <FaEllipsisV className="fs-4" />
              </div>
            </li>

            <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="text-success me-3 fs-3" />
                <div>
                  <h6 className="mb-1 wd-black-bold">
                    <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                      A2
                    </a>
                  </h6>
                  <small style={{ color: "#a50c0c" }}>Multiple Modules</small>
                  <small className="text-muted">
                    {" | "}
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Not available until
                    </span>{" "}
                    May 13 at 12:00am
                  </small>
                  <br />
                  <small className="text-muted">
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Due
                    </span>{" "}
                    May 20 at 11:59pm | 100 pts
                  </small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <MdCheckCircle className="text-success me-4 fs-4" />
                <FaEllipsisV className="fs-4" />
              </div>
            </li>

            <li className="list-group-item p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="text-success me-3 fs-3" />
                <div>
                  <h6 className="mb-1 wd-black-bold">
                    <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
                      A1
                    </a>
                  </h6>
                  <small style={{ color: "#a50c0c" }}>Multiple Modules</small>
                  <small className="text-muted">
                    {" | "}
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Not available until
                    </span>{" "}
                    May 20 at 12:00am
                  </small>
                  <br />
                  <small className="text-muted">
                    <span style={{ color: "#6c757d", fontWeight: "bold" }}>
                      Due
                    </span>{" "}
                    May 27 at 11:59pm | 100 pts
                  </small>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <MdCheckCircle className="text-success me-4 fs-4" />
                <FaEllipsisV className="fs-4" />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
