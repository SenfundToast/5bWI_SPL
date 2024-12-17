public class DataGenerator {
    public static int[] getRandomNumbers(int count) {
        int[] numbers = new int[count];
        for (int i = 0; i < count; i++) {
            numbers[i] = (int) (Math.random() * 100);
        }
        return numbers;
    }
}


