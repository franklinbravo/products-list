import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';

const MainLayout = ({ children, header }) => {
	return (
		<Layout>
			<Header>{header}</Header>
			<Layout>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
