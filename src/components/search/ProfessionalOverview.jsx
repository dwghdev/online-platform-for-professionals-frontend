import styles from '@/styles/Components.module.sass';
import {
	Box,
	SkeletonCircle,
	Avatar,
	Text,
	Button,
	ButtonGroup,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { StarIcon, CalendarIcon, AddIcon } from '@chakra-ui/icons';

// TODO Insert selected professional data
// TODO REMOVE after adding context
import {
	services,
	workPortfolios,
	reviews,
} from '../../temporaryMocks/mock_professional_data';

const ProfessionalOverview = ({ img, isLoading }) => {
	return (
		<Box className={styles.overviewContainer}>
			<Box className={styles.header}>
				<Box className={styles.info}>
					<Box className={styles.displayPhoto}>
						<SkeletonCircle size="116px" isLoaded={!isLoading}>
							<Avatar
								src={img}
								size="2xl"
								borderRadius="full"
								border="4px solid white"
							/>
						</SkeletonCircle>
					</Box>
					<Box>
						<Text className={styles.name} fontSize="xl">
							Professional Name
						</Text>
						<Text className={styles.field} fontSize="xl">
							Professional Field
						</Text>
						<Text color="gray.500">Contact Number | Email</Text>
					</Box>
				</Box>
				<Box className={styles.actions}>
					<ButtonGroup spacing={3}>
						{/*TODO Call post /connections */}
						<Button leftIcon={<AddIcon />} className={styles.subscribe}>
							Subscribe
						</Button>
						{/* TODO Disable button if not subscribed (client.subscription.includes(professional)) */}
						<Button
							leftIcon={<CalendarIcon boxSize={5} />}
							className={styles.bookEvent}
						>
							Easy Book
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
			<Box className={styles.overview}>
				<Text fontSize="2xl">Headline text here</Text>
				<Text fontSize="2xl">Services</Text>
				<UnorderedList spacing={3}>
					{services.map((service) => {
						return (
							<ListItem color="white">
								<Text>{service.title}</Text>
								<Text>{service.details}</Text>
								{service.minPrice ? (
									<Text as="i">
										Php {service.minPrice}-{service.maxPrice}
									</Text>
								) : (
									''
								)}
							</ListItem>
						);
					})}
				</UnorderedList>
				<Text fontSize="2xl">Work Portfolio</Text>
				<UnorderedList>
					{workPortfolios.map((workPortfolio) => {
						return (
							<ListItem color="white">
								<Text>{workPortfolio.title}</Text>
								<Text>{workPortfolio.details}</Text>
							</ListItem>
						);
					})}
				</UnorderedList>
				<Text fontSize="2xl">Reviews</Text>
				{reviews.map((review) => {
					return (
						<Box color="white">
							{[...Array(5)].map((n, i) => {
								return <StarIcon color={i + 1 < review.rating ? '#ff652f' : 'gray'} />;
							})}
							<Text>{review.rating}</Text>
							<Text>{review.body}</Text>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default ProfessionalOverview;