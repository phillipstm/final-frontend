import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState({ items });
  }
  //Add Delete

  /** 
   * create a way to delete our cats
deleteCats = async (id) => {
  try {
    //create our route to server
    let url =`${SERVER}/cats/${id}`;
    //call the server and delete the cat, now it will be gone from our db
    await axios.delete(url);
    //then we should remove it from our local state.
    let updatedCats = this.state.cats.filter(cat => cat._id !== id);
    this.setState({
      cats: updatedCats
    });
  } catch (error) {
    console.log('we have an error: ', error.response.data);
  }
};
*/
deleteItems = async (id) => {
  try {
    //need url
    
  } catch (error) {
    
  }
};



  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items itemsList={this.state.items} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
