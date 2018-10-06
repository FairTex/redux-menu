import React from 'react';
import Tree from './Tree';
import { Modal, Button } from 'antd';
import AddCategory from './AddCategory';
import AddItem from './AddItem';
import EditItem from './EditItem';
import styled from 'styled-components';
import { findItemById, getMenu } from './utils';

const Container = styled.div`
    width: 800px;
    margin: 50px auto;
`

/* eslint-disable react/prefer-stateless-function */
export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      editableNode: {},
      parentId: '',
      mode: 'choose',
    };
  }

  componentDidMount() {
    getMenu().then(menu => {
      this.props.setMenu(menu);
    });
  }

  openModal = (itemId, mode = 'choose') =>
    this.setState({ isOpenModal: true, parentId: itemId, mode });
  closeModal = () => this.setState({ isOpenModal: false });

  setMode = mode => {
    this.setState({ mode });
  };

  onSelect = selectedKeys => {
    const node = findItemById(this.props.menu, selectedKeys[0]);
    this.setState(
      {
        editableNode: node,
      },
      () => this.openModal(null, 'edit'),
    );
  };

  add = node => {
    this.props.addNode(
      {
        ...node,
        id: node.title,
      },
      this.state.parentId,
    );
    this.closeModal();
  };

  edit = node => {
    this.props.editNode(node);
    this.closeModal();
  };

  render() {
    const { menu } = this.props;

    return (
      <Container>
        <h1>MENU LIST</h1>

        <Tree openModal={this.openModal} onSelect={this.onSelect} menu={menu} />

        <Modal
          footer={null}
          visible={this.state.isOpenModal}
          onCancel={this.closeModal}
        >
          <div style={{ padding: '50px 20px' }}>
            {this.state.mode === 'choose' && (
              <div>
                <Button onClick={() => this.setMode('category')}>
                  Добавить категорию
                </Button>
                <Button onClick={() => this.setMode('node')}>
                  Добавить блюдо
                </Button>
              </div>
            )}
            {this.state.mode === 'edit' && (
              <EditItem edit={this.edit} node={this.state.editableNode} />
            )}
            {this.state.mode === 'category' && <AddCategory add={this.add} />}
            {this.state.mode === 'node' && <AddItem add={this.add} />}
          </div>
        </Modal>
      </Container>
    );
  }
}
