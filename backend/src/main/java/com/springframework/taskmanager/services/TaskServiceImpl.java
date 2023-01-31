package com.springframework.taskmanager.services;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TaskServiceImpl implements TaskService{

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> findAll() {
        List<Task> tasks = new ArrayList<>();
        taskRepository.findAll().forEach(tasks::add);
        return tasks;
    }

    @Override
    public Task findById(Long id) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        return optionalTask.orElse(null);
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public void deleteAll() {
        taskRepository.deleteAll();
    }

    @Override
    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}
