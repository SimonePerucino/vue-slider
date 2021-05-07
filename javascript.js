const app = new Vue(
    {
        el: '#root',
        data: {
            picturesList: [
                "https://picsum.photos/1080/600/?i=0",
                "https://picsum.photos/1080/600/?=1",
                "https://picsum.photos/1080/600/?=2",
                "https://picsum.photos/1080/600/?=3",
                "https://picsum.photos/1080/600/?=4",
            ],
            actualPicture: 0
        },
        methods: {
            /**
             * 
             * @param {number} direction 
             */
            changeImg(direction) {
                let newIndex = this.actualPicture + direction;

                if (newIndex < 0) {
                    newIndex = this.picturesList.length - 1;

                } else if (newIndex > (this.picturesList.length - 1)) {
                    newIndex = 0;
                }
                console.log(newIndex);
                this.actualPicture = newIndex
            },
            onKeyPress() {
                console.log("key pressed");
            },
            onDotClick(clickedIndex) {
                this.actualPicture = clickedIndex
                console.log(clickedIndex);
            }
        },
        mounted() {

            const elementoHtml = document.querySelector("#sliderContainer")
            elementoHtml.focus()
        }
    }
)

