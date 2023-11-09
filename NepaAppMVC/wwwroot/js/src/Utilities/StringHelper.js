export class StringHelper {
    static ConvertToPascalCase = (input) => {
        const words = input.split(/[_\-]/);
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return capitalizedWords.join('');
    }
}