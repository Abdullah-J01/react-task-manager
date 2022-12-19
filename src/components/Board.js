import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tasks from "./Tasks";

import React from 'react'

const Board = ( {tasks, updateStatus, onToggle} ) => {
  return (
    <Container>
      <Row>
        <Col className="border-right">
            <h2>To Do</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} updateStatus={updateStatus} currentStatus={0} onToggle={onToggle}/> : <p>No tasks available</p>}
        </Col>
        <Col className="border-right">
            <h2>In Progress</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} updateStatus={updateStatus} currentStatus={1} onToggle={onToggle}/> : <p>No tasks available</p>}
        </Col>
        <Col className="border-right">
            <h2>In Testing</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} updateStatus={updateStatus} currentStatus={2} onToggle={onToggle}/> : <p>No tasks available</p>}
        </Col>
        <Col>
            <h2>Done</h2>
            {tasks.length > 0 ? <Tasks tasks={tasks} updateStatus={updateStatus} currentStatus={3} onToggle={onToggle}/> : <p>No tasks available</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default Board