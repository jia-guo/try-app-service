import { PivotItem as FluentUIPivotItem } from '@fluentui/react';
import React from 'react';

interface Props {
    children: React.ReactNode;
    itemIcon: string;
}
export const PivotItem: React.FunctionComponent<Props> = ({children, itemIcon}) => {
  return <FluentUIPivotItem alwaysRender={true} itemIcon={itemIcon}>{children}</FluentUIPivotItem>;
};
