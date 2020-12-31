FROM openjdk:14-alpine
ARG JAR_FILE=build/libs/foodvariety-*.jar
COPY ${JAR_FILE} /app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]
