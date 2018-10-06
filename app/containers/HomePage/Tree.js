import React from 'react';
import { Tree, Button } from 'antd';
const { TreeNode } = Tree;

export default ({ onSelect, menu, openModal }) => {
  const buildMenu = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode
            key={item.id}
            title={
              <span>
                {item.title}
                {'  '}
                <Button onClick={() => openModal(item.id)}>+</Button>
              </span>
            }
            selectable={false}
          >
            {buildMenu(item.children)}
          </TreeNode>
        );
      }

      const title = [];
      if (item.title) {
        title.push(item.title);
      }
      if (item.ingredients) {
        title.push(`(состав: [${item.ingredients}])`);
      }
      if (item.price) {
        title.push(`цена: ${item.price} руб.`);
      }
      return <TreeNode key={item.id} title={title.join(' ')} />;
    });

  return (
    <Tree showLine defaultExpandAll onSelect={onSelect}>
      {buildMenu(menu)}
    </Tree>
  );
};
