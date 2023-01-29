package com.springframework.taskmanager.dataLoader;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class DataLoader implements CommandLineRunner {

    private final TaskRepository taskRepository;
    private final TaskGroupRepository taskGroupRepository;
    public DataLoader(TaskRepository taskRepository, TaskGroupRepository taskGroupRepository) {
        this.taskRepository = taskRepository;
        this.taskGroupRepository = taskGroupRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Task task1 = new Task(1L,"task1");
        taskRepository.save(task1);
        Task task2 = new Task(2L,"task2");
        taskRepository.save(task2);
        Set<Task> tasks = new HashSet<>();
        tasks.add(task1);
        tasks.add(task2);

        TaskGroup taskGroup1 = new TaskGroup(1L,"Group 1",tasks);
        taskGroupRepository.save(taskGroup1);

    }
}
