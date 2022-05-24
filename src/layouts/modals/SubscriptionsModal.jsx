import Modal from '@/components/overlay/Modal';
import AlertDialog from '@/components/overlay/AlertDialog';
import UserConnectionList from '../connections/UserConnectionList';

import { useQuery } from 'react-query';
import { useDisclosure } from '@chakra-ui/react';
import { useConnections } from '@/connections_context';

function SubscriptionsModal({ ...props }) {
	const deleteAlertDialog = useDisclosure();
	const { getSubscriptions } = useConnections();

	const { data, isLoading } = useQuery('subscriptions', getSubscriptions);

	const handleDelete = () => {
		console.log('delete connection');
	};

	return (
		<Modal {...props} header="Subscription">
			<UserConnectionList
				connections={data}
				isLoading={isLoading}
				deleteAlertDialog={deleteAlertDialog}
			/>

			{/* Delete Connection Alert */}
			<AlertDialog
				isCentered
				buttonColor="red"
				buttonLabel="Delete"
				{...deleteAlertDialog}
				header="Delete Subscription?"
				buttonClick={handleDelete}
				label="Are you sure? You can't undo this action afterwards."
			/>
		</Modal>
	);
}

export default SubscriptionsModal;
