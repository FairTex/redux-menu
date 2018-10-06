import React, { Component } from 'react';
import { Button, Input } from 'antd';

export default class AddCategory extends Component {
  state = {
    title: '',
  };

  onChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = () => {
    if (this.state.title.length > 0) {
      this.props.add({ ...this.state, children: [] });
      this.setState({ title: '' });
    }
  };

  render() {
    return (
      <div>
        <Input
          placeholder="Название категории"
          value={this.state.title}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Сохранить</Button>
      </div>
    );
  }
}
