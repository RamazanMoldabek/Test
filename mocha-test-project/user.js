function createUser(name, age, email) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error('Invalid name');
    }
    if (age === null || age === undefined || typeof age !== 'number' || age < 0 || age > 150) {
        throw new Error('Invalid age');
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
        throw new Error('Invalid email');
    }

    const isAdult = age >= 18;

    return {
        name,
        age,
        email,
        isAdult
    };
}

function getUserStatus(user) {
    if (!user || typeof user !== 'object' || user.age === undefined) {
        throw new Error('Invalid user object');
    }
    
    if (user.age >= 65) {
        return 'Senior';
    } else if (user.age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

async function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'John Doe',
                age: 30,
                email: 'john@example.com'
            });
        }, 100);
    });
}

module.exports = {
    createUser,
    getUserStatus,
    fetchUser
};
