const { expect } = require('chai');
const { createUser, getUserStatus, fetchUser } = require('../user');

describe('User Module', () => {

    describe('createUser()', () => {
        it('should correctly create a user when valid arguments are passed', () => {
            const user = createUser('Alice', 25, 'alice@example.com');
            expect(user).to.be.an('object');
            expect(user).to.have.property('name', 'Alice');
            expect(user).to.have.property('age', 25);
            expect(user).to.have.property('email', 'alice@example.com');
            expect(user).to.have.property('isAdult', true);
        });

        it('should mark a user as not adult if age is under 18', () => {
            const user = createUser('Bob', 17, 'bob@example.com');
            expect(user.isAdult).to.be.false;
        });

        describe('Error handling', () => {
            it('should throw an error if name is missing or empty', () => {
                expect(() => createUser('', 20, 'test@example.com')).to.throw('Invalid name');
                expect(() => createUser(null, 20, 'test@example.com')).to.throw('Invalid name');
                expect(() => createUser(123, 20, 'test@example.com')).to.throw('Invalid name');
            });

            it('should throw an error for invalid email formats', () => {
                expect(() => createUser('Alice', 20, 'invalid-email')).to.throw('Invalid email');
                expect(() => createUser('Alice', 20, null)).to.throw('Invalid email');
            });
        });

        describe('Edge cases (Age)', () => {
            it('should throw an error if age is null', () => {
                expect(() => createUser('Alice', null, 'test@example.com')).to.throw('Invalid age');
            });
            
            it('should throw an error if age is a string or negative', () => {
                expect(() => createUser('Alice', -5, 'test@example.com')).to.throw('Invalid age');
                expect(() => createUser('Alice', '20', 'test@example.com')).to.throw('Invalid age');
            });

            it('should correctly handle age=0', () => {
                const baby = createUser('Baby', 0, 'baby@example.com');
                expect(baby.age).to.equal(0);
                expect(baby.isAdult).to.be.false;
            });

            it('should throw an error if age is unrealistically large', () => {
                expect(() => createUser('Ancient', 200, 'old@example.com')).to.throw('Invalid age');
            });
        });
    });

    describe('getUserStatus()', () => {
        it('should return "Minor" for users under 18', () => {
            const user = createUser('Bob', 17, 'bob@example.com');
            expect(getUserStatus(user)).to.equal('Minor');
        });

        it('should return "Adult" for users between 18 and 64', () => {
            const user = createUser('Alice', 25, 'alice@example.com');
            expect(getUserStatus(user)).to.equal('Adult');
        });

        it('should return "Senior" for users 65 and over', () => {
            const user = createUser('John', 65, 'john@example.com');
            expect(getUserStatus(user)).to.equal('Senior');
        });

        it('should throw an error if an invalid user is passed', () => {
            expect(() => getUserStatus(null)).to.throw('Invalid user object');
            expect(() => getUserStatus({})).to.throw('Invalid user object');
        });
    });

    describe('fetchUser()', () => {
        it('should fetch user data asynchronously', async () => {
            const user = await fetchUser();
            expect(user).to.be.an('object');
            expect(user).to.have.property('id', 1);
            expect(user).to.have.property('name', 'John Doe');
            expect(user).to.have.property('age', 30);
            expect(user).to.have.property('email', 'john@example.com');
        });
    });

});
