let mockUsers = [];

const userOne = {
	id: '1',
	email: 'juan@email.com',
	name: 'Juan Daw',
	contactNumber: '09151234567',
	city: 'Manila',
	region: 'NCR',
	professional: {
		field: 'Registered Professional',
		officeAddress: '5th Ave',
		headline: 'Helpful Professional',
	},
	relationships: {
		subscribers: {
			data: [1, 2, 3, 4, 5],
		},
		clientele: {
			data: [1, 2, 3, 4],
		},
	},
	meta: {
		averageRating: '4.3',
	},
};

const userTwo = {
	id: '2',
	email: 'zoro@email.com',
	name: 'Roronoa Zoro',
	contactNumber: '09151654567',
	city: 'Quezon City',
	region: 'NCR',
	professional: {
		field: 'Mechanical Engineer',
		officeAddress: 'Mandaluyong',
		headline: 'Greatest Professional',
	},
	relationships: {
		subscribers: {
			data: [1, 2, 3, 4],
		},
		clientele: {
			data: [1, 2, 3, 4, 5],
		},
	},
	meta: {
		averageRating: '4.7',
	},
};

const userThree = {
	id: '3',
	email: 'sanji@email.com',
	name: 'Roronoa Zoro',
	contactNumber: '09151651567',
	city: 'Paranaque',
	region: 'NCR',
	professional: {
		field: 'Nutritionist',
		officeAddress: 'Taguig',
		headline: 'Delicious and Nutritious',
	},
	relationships: {
		subscribers: {
			data: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
		},
		clientele: {
			data: [1, 2, 3, 4, 5, 1, 2, 3],
		},
	},
	meta: {
		averageRating: '4.5',
	},
};

const userFour = {
	id: '4',
	email: 'nami@email.com',
	name: 'Nami Swan',
	contactNumber: '09143851567',
	city: 'Bulacan',
	region: 'NCR',
	professional: {
		field: 'Dentist',
		officeAddress: 'Makati',
		headline: 'Best Dentist',
	},
	relationships: {
		subscribers: {
			data: [1, 2, 3, 4, 5, 1, 2, 3, 4],
		},
		clientele: {
			data: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
		},
	},
	meta: {
		averageRating: '4.2',
	},
};

const userFive = {
	id: '5',
	email: 'sanji@email.com',
	name: 'Roronoa Zoro',
	contactNumber: '09151651567',
	city: 'Paranaque',
	region: 'NCR',
	professional: {
		field: 'Nutritionist',
		officeAddress: 'Taguig',
		headline: 'Delicious and Nutritious',
	},
	relationships: {
		subscribers: {
			data: [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 4],
		},
		clientele: {
			data: [1, 2, 3, 4, 5, 1, 2, 3, 4],
		},
	},
	meta: {
		averageRating: '4.7',
	},
};

for (let i = 0; i < 3; i++) {
	mockUsers.push(userOne);
	mockUsers.push(userTwo);
	mockUsers.push(userThree);
	mockUsers.push(userFour);
	mockUsers.push(userFive);
}

mockUsers = mockUsers.sort(() => Math.random() - 0.5);
export { mockUsers };
