import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class Items extends Component {

  render() {
    // console.log(this.deleteItems)
    console.log('this is the function ', this.props.deleteItems);
    return (
      // https://react-bootstrap.github.io/components/accordion/
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <Item 
                key={item._id} 
                itemData={item}
                deleteItems={this.props.deleteItems}
                //add props for delete here
                 />
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}



























class Item extends Component {

  render() {

    const itemData = this.props.itemData;

    return (
      <tr>
        <td>{itemData.name}</td>
        <td>{itemData.description}</td>
        <td>

          {/* need function call as props from Items class above  */}
          <Button 
          data-testid={`delete-button-${itemData.name}`}
          onClick={() => this.props.deleteItems(this.props.itemData._id)}
          // add here onclick
          >Delete Item</Button>
        </td>
      </tr>
    );
  }
}

export default Items;
