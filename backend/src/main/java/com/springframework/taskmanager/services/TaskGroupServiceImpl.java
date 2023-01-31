package com.springframework.taskmanager.services;

import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TaskGroupServiceImpl implements TaskGroupService{

    private final TaskGroupRepository taskGroupRepository;

    public TaskGroupServiceImpl(TaskGroupRepository taskGroupRepository) {
        this.taskGroupRepository = taskGroupRepository;
    }

    @Override
    public List<TaskGroup> findAll() {
        List<TaskGroup> taskGroups = new ArrayList<>();
        Sort sort = Sort.by(Sort.Direction.DESC,"createAt");
        taskGroupRepository.findAll(sort).forEach(taskGroups::add);
        return taskGroups;
    }

    @Override
    public TaskGroup findById(Long id) {
        Optional<TaskGroup> optionalTaskGroup = taskGroupRepository.findById(id);
        return optionalTaskGroup.orElse(null);
    }

    @Override
    public TaskGroup save(TaskGroup taskGroup) {
        return taskGroupRepository.save(taskGroup);
    }

    @Override
    public void deleteAll() {
        taskGroupRepository.deleteAll();
    }

    @Override
    public void deleteById(Long id) {
        taskGroupRepository.deleteById(id);
    }
}
