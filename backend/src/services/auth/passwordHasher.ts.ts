import bcrypt from 'bcrypt';

export const hashedPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
        throw error;
    }
};





