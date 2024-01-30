const token = 'ceac1621b8626fbeca034337ed1ebf58dfdeedb5dc8a3974'

export const server_calls = {
    // CRUD operations for Bikes
    bikes: {
        get: async () => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/bikes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch bike data from server');
            }

            return await response.json();
        },

        create: async (data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/bikes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error('Failed to create new bike data on server');
            }

            return body;
        },

        update: async (id: string, data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/bikes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update bike data on server');
            }
        },

        delete: async (id: string) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/bikes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('Bike item deleted.');
            }
        },
    },








    atvs: {
        get: async () => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/atvs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch ATV data from server');
            }

            return await response.json();
        },

        create: async (data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/atvs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error('Failed to create new ATV data on server');
            }

            return body;
        },

        update: async (id: string, data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/atvs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update ATV data on server');
            }
        },

        delete: async (id: string) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/atvs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('ATV item deleted.');
            }
        },
    },

    





    gear: {
        get: async () => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/gear`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch Gear data from server');
            }

            return await response.json();
        },

        create: async (data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/gear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error('Failed to create new Gear data on server');
            }

            return body;
        },

        update: async (id: string, data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/gear/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update Gear data on server');
            }
        },

        delete: async (id: string) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/gear/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('Gear item deleted.');
            }
        },
    },






    helmets: {
        get: async () => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/helmets`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch Helmets data from server');
            }

            return await response.json();
        },

        create: async (data: any = {}) => {
            console.log(JSON.stringify(data))
            console.log('Im here')
            const response = await fetch(`https://euro-motorsports.onrender.com/api/helmets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error('Failed to create new Helmets data on server');
            }

            return body;
        },

        update: async (id: string, data: any = {}) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/helmets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update Helmets data on server');
            }
        },

        delete: async (id: string) => {
            const response = await fetch(`https://euro-motorsports.onrender.com/api/helmets/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                console.log('Helmet item deleted.');
            }
        },
    },
    
};
